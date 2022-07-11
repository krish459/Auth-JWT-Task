import React from 'react'

export default function Navbar() {
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"><b>TODOS</b></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="/">Home</a>
                        <a class="nav-item nav-link" href="/additem">Add TODO</a>
                        <a class="nav-item nav-link" onClick={handleLogout} >Logout</a> 
					
				

                    </div>    
                </div>
            </nav>
        </div>
    )
}
