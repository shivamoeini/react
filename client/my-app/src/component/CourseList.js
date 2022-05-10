import React from "react";
import {Table,Button}from "react-bootstrap"
import{Link}from "react-router-dom"
const CourseList = ({ coursesData }) => {
  return (
    <div className="contener">
      <Table className="" striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
            <th colSpan={2}>Slug</th>
          </tr>
        </thead>
        <tbody>
          {coursesData && coursesData.map(course => {
              const { id, title, authorId, category, slug } = course;
              return (
                <tr key={id}>
                  <td>
                    <Link to={`/course/${slug}`} state={course}>
                      {title}
                    </Link>
                  </td>
                  <td>{authorId}</td>
                  <td>{category}</td>
                  <td>{slug}</td>
                  <td>
                    <Button variant='danger'>Delete</Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default  CourseList;
