import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { ResContext } from "./Context/ResContext";
import { NavLink } from "react-router";
import axios from "axios";

function Dashboard() {
    const dataset = useContext(ResContext);
    const [postingan, setPostingan] = useState([]);

    async function setPostinganPage(page_url) {
        await axios
          .get(page_url+'&size=5', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            setPostingan(response.data);
          });   
    }
    
    useEffect(() => {
        async function getUserdata() {  
            await axios.get('http://localhost:8000/api/v1/posts?page=0&size=5', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((response) => {
                setPostingan(response.data)
            })
        }

        getUserdata();
    }, [])

    console.log(postingan)

    return (
      <>
        <Navbar />
        <div className="container pt-5">
          {dataset.userData && (
            <p className="lead">
              Anda sedang login pada {dataset.userData.username}
            </p>
          )}
          {dataset.message && (
            <div className="alert alert-success">{dataset.message}</div>
          )}
          <NavLink
            to="/createpost"
            className="btn btn-sm btn-outline-dark mb-3"
          >
            Tambah Post
          </NavLink>

          {/* <button onClick={() => console.log(postingan)}>Hello</button> */}

          {postingan && (
            <>
              <div className="d-flex flex-wrap flex-column">
                {postingan?.posts?.data.map((post) => (
                  <div key={post.id} className="card mb-4">
                   <div className="d-flex flex-row">
                    {post.attachments.map((gambar) => (
                        <img
                          key={gambar.id}
                          src={
                            "http://localhost:8000/storage/" +
                            gambar.storage_path
                          }
                          alt=""
                          className="card-img-top"
                          style={{
                            width: "25%",
                          }}
                        />
                    ))}
                  </div>
                    <div className="card-header">{post.caption}</div>
                    <div className="card-body">
                      <p className="lead">Author: {post.user.username} {post.user.username = dataset.userData.username ? "(Me)" : ""}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex gap-2 m-2">
                {postingan?.posts?.links?.map((link, i) => (
                  <button
                    key={i}
                    disabled={!link.url}
                    onClick={() => link.url && setPostinganPage(link.url)}
                    className={`btn btn-sm btn-outline-primary ${
                      link.active ? "btn-primary text-white" : ""
                    }`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  ></button>
                ))}
              </div>
            </>
          )}
        </div>
      </>
    );
}

export default Dashboard;