import React,{useState} from "react";
import{Button, Form}from "react-bootstrap"

export default function CreateCourse() {
    const [updateCourse,setUpdateCourse]=useState({
        title:"",
        authorId:"",
        slug:"",
        category:"",
    });
    const handleSubmit=e=>{
        e.preventDefult();
        setUpdateCourse({
            title:"",
            authorId:"",
            slug:"",
            category:""
        })
    }

    return(
        <>
        <h1>category Course Page </h1>
        <form onSubmit={handleSubmit}>
        <div>
            <lable htmlFor="title">Course Title</lable>
            <input type="text" name="title" value={updateCourse.title} onChange={e=>setUpdateCourse({...updateCourse,title:e.target.value})}/>
        </div>
      
        <div>
            <lable htmlFor="authorId">Course authorId</lable>
            <input type="text" name="title" value={updateCourse.authorId} onChange={e=>setUpdateCourse({...updateCourse,authorId:e.target.value})}/>
        </div>

        <div>
            <lable htmlFor="title">Course Title</lable>
            <input type="text" name="title" value={updateCourse.title} onChange={e=>setUpdateCourse({...updateCourse,title:e.target.value})}/>
        </div>
        <div>
            <lable htmlFor="slug">Course slug</lable>
            <input type="text" name="slug" value={updateCourse.slug} onChange={e=>setUpdateCourse({...updateCourse,slug:e.target.value})}/>
        </div>
        <div>
            <lable htmlFor="category">Course category</lable>
            <input type="text" name="category" value={updateCourse.category} onChange={e=>setUpdateCourse({...updateCourse,category:e.target.value})}/>
        </div>
        <Button type='submit'>Submit</Button>
        </form>
        </>
    )
}