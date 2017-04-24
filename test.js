const fs = require("fs");
var city = JSON.parse(fs.readFileSync('F:/pro/city.json', 'utf-8'));
console.log(city.zhaoxiao[0]);

                <%  JSON.parse(city).($("#name").val()).map(function(data){ %>
                <option><% data %></option>
                <% }) %>
                <h4><%= JSON.parse(city).($("#name").val())[0]%></h4>