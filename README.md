<h1>Project 1 by Michael Bartek, Joe Dippolito, Andrew Spadaro, and Tareeq Hamilton</h1>

<h3>Objective: To allow individuals obtain information about New Jersey State Parks and More!</h3>

<h3>Technologies used</h3>
    <ul>
        <li>Javascript</li>
        <li>Bootstrap</li>
        <li>Ajax</li>
        <li>Jquery</li>
    </ul>

<h3> Steps that were taken to accomplish our application</h3>
    <ol>
        <li>Firstly we had to find valid API's with good documentation. If problems occur
        with the API, having good documentation will help provide troubleshooting.</li>
        <li>After establishing the API's we wanted to use, gathering information from NPS API is the next thing as
        this api will have all the information we want to have. We do this with AJAX calling with the api. We conole log this data 
        in order to see what information is being called and the path we must take in order to use it in our application</li>
        <li>With a bootstrap grid and animate CSS, the body of the application takes form and applying the information in each
        html element because simple. We have to call it in this type of format "response.data[9].images[1].url"</li>
        <li>In the above step, we replicated the process many times with the pictures and links.</li>
        <li>After getting the format down, we took advantage of modals to display the 5 day forecast of the location of the park.
       Having information about the weather can influence a person's decision on going out with family or friends. This information
       was obtained from Openweather API.</li>
        <li>The use of modals was very tricky because we encountered a problem that would create a event bubbling. The modal
        system we used already had an event listner built in so had to figure out a way to solve it so we did.</li>
    </ol>


