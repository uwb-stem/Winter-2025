<html>

<head>
    <title>Search - Capstone Presentations Summer 2021</title> 
    <link rel="stylesheet" href="../css/homepage.css">
    <link rel="stylesheet" href="../css/presentations.css">
    <link rel="stylesheet" href="../css/uw-button.css">
    <link rel="stylesheet" href="../css/search-page.css">
    <script type="text/javascript" src="../js/structure.js"></script>
    <script type="text/javascript" src="../js/structure.js"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

<body>
    <header>
        <section class="uwb-logo">
            <a href="https://www.uwb.edu/stem"><img src="../images/web-white-left-school-signature-uw-bothell.png" alt="UW Bothell School of STEM Logo"></a>
        </section>

        <nav class="align-center" id="dawgdrops">
            <div class="dawgdrops-inner container">
                <ul class="dawgdrops-nav" id="menu-brand-menu">
        
                    <li class="dawgdrops-item">
                        <a href="../index.html" id="101" title="Home Page">Home Page</a>
                    </li>
        
                    <li class="dawgdrops-item">
                        <a href="../biological-sciences.html"
                        id="102" title="Biological Sciences">Biological Sciences</a>
                    </li>
        
                    <li class="dawgdrops-item">
                        <a href="../csse.html" id="103" title="CSS">Computing & Software Systems</a>
                    </li>
        
                    <li class="dawgdrops-item">
                        <a class="dropdown-toggle" href="#"
                        id="104" title="Engineering & Mathematics">Engineering & Mathematics</a>
        
                        <ul class="dawgdrops-menu dawgdrops-menu-em" id="menu-104">
                            <li>
                                <a href="../electrical-engineering.html"
                                title="Electric Engineering">Electrical Engineering</a>
                            </li>
        
                            <li>
                                <a href="../engineering-reu.html"
                                title="Mechanical Engineering">Engineering REU</a>
                            </li>
                        </ul>
                    </li>
        
                    <li class="dawgdrops-item">
                        <a class="dropdown-toggle" href="#"
                        id="105" title="Physical Sciences">Physical Sciences</a>
        
                        <ul class="dawgdrops-menu dawgdrops-menu-em" id="menu-105">
                            <li>
                                <a href="../chemistry.html"
                                title="Chemistry">Chemistry</a>
                            </li>
                            <li>
                                <a href="../physical-sciences-reu.html" title="REU">Physical Sciences REU</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        
        <h1>Summer 2021 Capstone Symposium</h1>
        <hr>
    </header>

    <h2>Search Directory</h2>

    <form action="./index.php">
        <!-- <label for="fname">Enter search key:</label><br> -->    
        <div class="box">
            <input type="text" id="keyword" name="keyword" placeholder="Enter name here"><br>
        </div>  
        
        <div class="box overlay" >
            <button type="submit"><i class="fa fa-search"></i></button>
        </div>
            
        <select id="search-for" name="search-for">
            <option value="student-name">Student Name</option>
            <option value="project-title">Project Title</option>
            <option value="faculty-advisor">Faculty Advisor</option>
        </select>                                      

        <!-- <input type="submit" value="Submit"> -->
    </form>

    <div class="space"></div>
    <div class="space"></div>
    <section id="presentation"></section>

    <?php
        $mysqli_connection = new MySQLi('stemadv.ovid.u.washington.edu', 'root', 'uasfrontdesk!', 'root', 7070);
        
        if ($mysqli_connection->connect_error){
            echo "Not connected, error: ".$mysqli_connection->connect_error;
        }

        $keywordfromform = $_GET["keyword"];
        $search_type = $_GET["search-for"];

        if ($keywordfromform != '') {
            
            if ($search_type == "student-name") {
                $query_cmd = "SELECT project_id FROM summer2021 WHERE student_name LIKE '%".$keywordfromform."%'";
            } else if ($search_type == "project-title") {
                $query_cmd = "SELECT project_id FROM summer2021 WHERE project_title LIKE '%".$keywordfromform."%'";
            } else {
                $query_cmd = "SELECT project_id FROM summer2021 WHERE faculty_advisor LIKE '%".$keywordfromform."%'";
            }

            $result = $mysqli_connection->query($query_cmd);
            
            if ($result->num_rows > 0) {

                while ($row = $result->fetch_assoc()) {
                    $id = $row["project_id"];
                
                    // if (str_contains($id, "reu") {

                    //     $group = new \stdClass();
                    //     $group->title = $row["project_title"];
                    //     $group->studentName = $row["student_name"];
                    //     $group->time = "12:30 PM - 12:45 PM";

                    //     $myStudent = new \stdClass();
                    //     $myStudent = json_encode($student);
                    // })

                    echo "<script type='text/javascript'>search('$id');</script>";
                }
    
            } else {
                echo "<div class='space'></div>";
                echo "<p class='text'>No projects found</p>";
            }
        }

        $mysqli_connection->close();
    ?>
</body>
</html>
