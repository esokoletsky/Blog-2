"use strict"
 exports.DATABASE_URL = process.env.DATABASE_URL || "mongodb://esokoletsky:deskjet11@ds137102.mlab.com:37102/blogposts"; 
 exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || "mongodb://localhost/test-restaurants-app"; 
exports.PORT = process.env.PORT || 8080;