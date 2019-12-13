import React from 'react'



function AdminDashboard() {
    return(

        <div className="d-flex" id="wrapper">
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">Admin Dashboard</div>
                <div className="list-group list-group-flush">
                    <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Manage Users</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Book Status</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Add Books</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Delete Books</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Update Books</a>
                </div>

            </div>

            <div id="page-content-wrapper">

                <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">


                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">

                        </ul>
                    </div>
                </nav>

                <div class="container-fluid">
                    <h1 class="mt-4">Admin Dashboard</h1>

                </div>
            </div>


        </div>

    )


}

export default AdminDashboard;