"use client";
import { useState } from "react";

export default function page() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);
  let todoCopy;
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { title, desc }]);
    setTitle("");
    setDesc("");
  };
  const deleteHandler = (index) => {
    console.log(index);
    todoCopy = [...todos];
    todoCopy.splice(index, 1);
    setTodos(todoCopy);
  };
  // console.log(todos);
  let todo = todos.map((item, index) => {
    return (
      <div
        key={index}
        className="flex
      justify-between m-4"
      >
        <h5>{item.title}</h5>
        <h6>{item.desc}</h6>
        <button
          className="bg-red-900 w-28"
          onClick={() => deleteHandler(index)}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <>
      <div
        className="bg-gray-800
       text-white text-center p-4 text-4xl "
      >
        Todo App
      </div>
      <div className="m-4 text-center">
        <form onSubmit={submitHandler}>
          <input
            type="text "
            className="border-red-600 text-black"
            placeholder="Enter Task "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text "
            className="border-red-600 m-4 text-black"
            placeholder="Enter Desc "
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className="bg-red-600 w-48 border-radius">Add</button>
        </form>
      </div>
      <hr />
      <div className="m-4 bg-zinc-500 p-3 ">
        {/* <h1>Hell</h1> */}
        {todo}
      </div>
    </>
  );
}
