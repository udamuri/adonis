'use strict'

const Student = use('App/Models/Student')
const { validate } = use('Validator')

class StudentController {

    async index ({ request, response }) {
        //let students = await Student.all()
        //return response.json(students)

        try {
            let pagination = request.only(['page', 'limit']);
            const page = parseInt(pagination.page, 10) || 1;
            const limit = parseInt(pagination.limit, 10) || 10;
            const students = await Student.query()
                     .from('students')
                     .paginate(page, limit)
            
            return response.json(students)
        } catch (error) {
            throw error
        }
    }

    async show ({params, response}) {
        const student = await Student.find(params.id)
        if (!student) {
            return response.status(404).json({data: 'Resource not found'})
        }

        return response.json(student)
    }

    async store ({request, response}) {
        const studentInfo = request.only(['nisn', 'name', 'study'])

        const rules = {
            nisn: 'required|unique:students,nisn',
            name: 'required|max:100',
            study: 'required|max:200',
        }

        const validation = await validate(request.all(), rules)

        if (validation.fails()) {
            return response.status(400).json(validation.messages())
        }

        const student = new Student()
        student.nisn = studentInfo.nisn
        student.name = studentInfo.name
        student.study = studentInfo.study 
        await student.save()

        return response.status(201).json(student)
    }

    async update ({params, request, response}) {
        const studentInfo = request.only(['nisn', 'name', 'study'])
        const student = await Student.find(params.id)
        
        if (!student) {
            return response.status(404).json({data: 'Resource not found'})
        }

        const rules = {
            nisn: `required|unique:students,nisn,id,${student.id}`,
            name: `required|max:100`,
            study: `required|max:200`,
        }

        const validation = await validate(request.all(), rules)

        if (validation.fails()) {
            return response.status(201).json(validation.messages())
        }

        student.nisn = studentInfo.nisn
        student.name = studentInfo.name
        student.study = studentInfo.study
        await student.save()

        return response.status(200).json(student)
    }

    async delete ({params, response}) {
        const student = await Student.find(params.id)

        if (!student) {
            return response.status(404).json({data: 'Resource not found'})
        }

        await student.delete()

        return response.status(204).json(null)
    }
}

module.exports = StudentController
