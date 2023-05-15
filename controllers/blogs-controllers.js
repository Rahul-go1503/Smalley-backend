const Blogs = require("../model/Blog")


exports.getAllBlogs = async (req,res,next)=>{
    try{
        var blogs = Blogs.find();
    }catch(err){
        console.log(err);
    }

    if(!blogs){
       return res.status(404).json({message :"Oops : No blog Found"});
    }
    return res.status(200).json({blogs})
}

exports.getBlogById = async (req,res,next)=>{
    try{
        var blog = await Blogs.findById(req.params.id);
    }catch(err){
        console.log(err);
    }

    if(!blog){
        return res.status(404).json({message :"Oops : No blog Found"});
     }
     return res.status(200).json({blog})

}

exports.addBlog = async (req,res,next)=>{
    const {title,description,date,likes,Comment} = req.body;
    try{
        var blog = new Blogs ({
            title,description,date,likes,Comment
        })
       await blog.save();
    }catch(err){
        console.log(err);
    }

    if(!blog){
       return res.status(500).json({message :"Oops : Server Error"});
    }
    return res.status(201).json({blog})
}

exports.updateBlog = async (req,res, next)=>{
    const {title,description,date,likes,Comment} = req.body;
    try{
        var blog = await Blogs.findOneAndUpdate(req.params.id,{
            title,description,date,likes,Comment
        })
       await blog.save();
    }catch(err){
        console.log(err);
    }

    if(!blog){
       return res.status(500).json({message :"Oops : Server Error not updated"});
    }
    return res.status(201).json({blog})
}
exports.deleteBlog = async (req, res, next) => {
    const id = req.params.id;
    let blog;
    try {
      blog = await Book.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!blog) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Blog Successfully Deleted" });
  };