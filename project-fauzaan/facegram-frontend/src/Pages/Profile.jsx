import React, { useContext, useEffect, useState } from "react";
import {  useSearchParams } from "react-router";
import axios from "axios";
import { ResContext } from "./Context/ResContext";
import Navbar from "./Components/Navbar";

function Profile() {
    const [searchParam, setSearchParam] = useSearchParams();
    const [userInfo, setUserInfo] = useState(null);
    const [message, setMessage] = useState('');
    const dataset = useContext(ResContext);
    const [following_status, setFollowingStatus] = useState('');

    useEffect(() => {
        async function getUserInfo(username) {
            await axios.get('http://localhost:8000/api/v1/users/'+username, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((response) => {
                setUserInfo(response)
                setFollowingStatus(response.data.following_status);
            })
        }
        
        const username = searchParam.get("username");
        
        if (!username) {
            searchParam.delete("username");
            setSearchParam(searchParam); 
            getUserInfo(dataset.userData.username)
        } else {
            getUserInfo(username);
        }
    }, [searchParam, setSearchParam, dataset])

    async function changeStatusFollow() {
        if (following_status == "not-following") {
            await axios.post(
              `http://localhost:8000/api/v1/users/${userInfo.data.username}/follow`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
              }).then((response) => {
                if (response.status == 200) {
                    setFollowingStatus(response.data.status)
                    console.log("BERHASIL FOLLOW", response.data.status)
                } else {
                    setMessage(response.data.message);
                }
            }).catch((eror) => {
                setMessage("Permintaan sedang tidak bisa di lakukan.")
                console.log(eror)
            });
        } else if(following_status == 'requested') {
            setFollowingStatus('requested')
        } else {
            await axios.post(
                `http://localhost:8000/api/v1/users/${userInfo.data.username}/unfollow`, {}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }}).then((response) => {
                        if (response.status == 204) {
                            setFollowingStatus("not-following")
                    } else {
                        setMessage(response.data.message);
                    }
                  }).catch((eror) => {
                    console.log(eror)
                    setMessage(eror.response.data.message);
                });
        }
    }

    
    return (
      <>
        <Navbar />
        <div className="container h-100 d-flex align-items-center">
          <div className="mx-auto">
            {message && <div className="alert alert-secondary">{message}</div>}
            {userInfo ? (
              userInfo.status == 200 ? (
                <>
                  <div className="card" style={{ minWidth: "30rem" }}>
                    <div className="card-header">
                      <div className="d-flex justify-content-between">
                        <div>
                          {userInfo.data.full_name}{" "}
                          {userInfo.data.is_your_account && "(Me)"}
                          <br />
                          <p className="lead h6 text-muted">
                            @{userInfo.data.username}
                          </p>
                        </div>
                        {!userInfo.data.is_your_account && <>
                        {following_status == "not-following" && (
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={changeStatusFollow}
                          >
                            Follow
                          </button>
                        )}
                        {following_status == "following" && (
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={changeStatusFollow}
                          >
                            UnFollow
                          </button>
                        )}
                        {following_status == "requested" && (
                          <button className="btn btn-sm btn-warning" disabled>
                            Requested
                          </button>
                        )}
                        </> }
                      </div>
                    </div>
                    <div className="card-body">
                      <p className="lead h3">{userInfo.data.bio}</p>
                    </div>
                  </div>
                  <div className="row gap-3">
                    {userInfo.data.posts.map((post) => (
                      <div key={post.id} className="col col-md-2-2">
                        <div
                          className="card bg-info m-1"
                          style={{ minWidth: "15rem" }}
                        >
                          <div className="d-flex align-items-center">
                            {post.attachments.map((gambar) => (
                              <img
                                key={gambar.storage_path}
                                src={
                                  "http://localhost:8000/storage/" +
                                  gambar.storage_path
                                }
                                alt=""
                                className="img-card-top"
                                width="25%"
                              />
                            ))}
                          </div>
                          <div className="card-header">{post.caption}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <h1>Silahkan Check kembali usernamenya</h1>
              )
            ) : (
              <div className="alert alert-info">
                <div className="d-flex align-items-center">
                  <strong>Loading sabar yah..</strong>
                  <div className="spinner-border spinner-border-sm me-3"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );

   
 


}

export default Profile;