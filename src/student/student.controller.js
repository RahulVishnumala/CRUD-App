const Student = require("./student.schema")
const get = async(req,res) =>{
    const students = await Student.find()
    res.status(200).json(students)
}
const post = async(req,res) =>{
    try{
        const student = new Student(req.body)
        await student.save()
        res.status(200).json(student)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const put = async(req,res) =>{
    try{
        const id = req.params.id
        const student = await Student.findByIdAndUpdate(id,req.body)
        re.status(200).json(student)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const remove = async(req,res) =>{
    try{
        const id = req.params.id
        const student = await Student.deleteOne( {_id : id}) 
        re.status(200).json(student)
    }
    catch(err){
        res.status(500).json(err)
    }
}


module.exports = {
    get,
    post,
    put,
    remove
}