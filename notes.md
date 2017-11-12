HINT Latitude values range from 40.0° to 40.1° Longittude values range from -93.1° to -93.0°


## say in video
you can put a code sample in your description


You've been hired by the local Girl Scouts organization to add features to an App currently in Beta. In addition to allowing the scouts to accept payments right at the front door, the app tracks cookie sales by location. The goal is to use this information to better target their customer base and tap into new markets. The troop has divided their city into a 10 by 10 grid with each square representing a 'zone' for a pair of Scouts to target.

You'll be given an array, (that simulates table data) containing information about cookie sales.
Each entry is an object with key: value pairings.
Each entry object (representing a sale) will have a latitude and longitude property represented as 'lat' and 'lon' along with some other information about the sale.

Your task is to combine this GPS and cookie sales information then map it to the 10x10 grid that the Scouts are using to distribute thier sales force. Each square or 'zone' in the grid will be assigned a number from 1-100. The number will grow from the bottom left to the top right corner. For example zone 1 would be the bottom left square. Zone number 11 would be the second row fromt the bottom and the first square in the row.

Part of the problem is to figure out how to translate GPS coordinates to the grid.
You will be given the minimum and maximum Latitude and Longitude values, you will be responsible for determining the boundries of the grid and defining the location of each zone.

For each 'zone' in the grid we want to know top 3 (sometimes less) most sold cookie varities.
First, divide the area given to you defined by GPS coordinates into a 10x10 grid and decide which sales belong to which part of the grid.
Then write a function thant takes in a zone number and returns an array of the top 3.
FOR EXAMPLE :  zone = 40, getBestSellers(40), => ['short bread', 'thin mints', 'caramel delights']


