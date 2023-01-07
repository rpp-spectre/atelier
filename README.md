# L'Atelier Spectre

##Overview:
This project is the client-facing retail portal for customers to browse items in our catalog.

##Table of Contents:
**[Description](#description)**<br>
**[Installation](#installation)**<br>

##Description:
It contains 3 main sections: the product overview, reviews & ratings, and questions & answers.

The product overview includes an image gallery of the currently selected product along with product information. Customers can expand the image to view the photos in detail, as well as select the style and size and add it into their shopping cart.

The reviews and ratings shows the current product's overall ratings as well as any written reviews. The rating breakdown provides information on how many stars reviewers gave the product and the product breakdown further provides details on characteristics like the quality, fit, and size of the product. Customers can filter reviews for certain star ratings, and can also sort the reviews based on newest, relevant or helpful reviews. Customers can mark reviews as helpful or even submit their own review.

The questions and answers portion allows customers to view other customer questions about the product, as well as customer answers. Customers can submit their own questions or answers as well as search through the list of questions to find if related questions have already been submitted.

##Installation:
To download this project, you will need node.js and git. You can fork and clone this repo, then run npm install to install all required dependancies in your code editor. Scripts in the package.json file are available to run webpack as well as start the server.

Two API tokens will be required for this project saved in a dotenv file. This would include a github token as well as an imageBB API token.