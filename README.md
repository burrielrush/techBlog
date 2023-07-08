# techBlog

This is a CMS-style blog site that allows users to create, read, update, and delete blog posts. Users can also leave comments on blog posts. The site provides a user-friendly interface and follows the specified functionality.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Introduction

When you visit the site for the first time, you will be presented with the homepage. The homepage includes existing blog posts (if any have been posted), navigation links for the homepage and the dashboard, and the option to log in.

If you click on the homepage option, you will be taken to the homepage. Clicking on any other links in the navigation will prompt you to either sign up or sign in.

If you choose to sign up, you will be prompted to create a username and password. Clicking on the sign-up button will save your user credentials and log you into the site.

When you revisit the site at a later time and choose to sign in, you will be prompted to enter your username and password. Once signed in, you will see navigation links for the homepage, the dashboard, and the option to log out.

Clicking on the homepage option in the navigation will take you to the homepage, where you will be presented with existing blog posts that include the post title and the date created.

If you click on an existing blog post, you will be presented with the post title, contents, post creator's username, and date created. You will also have the option to leave a comment.

When you enter a comment and click on the submit button while signed in, the comment will be saved and the post will be updated to display the comment, the comment creator's username, and the date created.

Clicking on the dashboard option in the navigation will take you to the dashboard. You will be presented with any blog posts you have already created and the option to add a new blog post.

Clicking on the button to add a new blog post will prompt you to enter both a title and contents for your blog post. Clicking on the button to create a new blog post will save the title and contents of your post, and you will be taken back to an updated dashboard with your new blog post.

In the dashboard, you can click on one of your existing posts to delete or update it, and you will be taken back to an updated dashboard.

If you click on the logout option in the navigation, you will be signed out of the site.

If you are idle on the site for more than a set time, you will still be able to view posts and comments, but you will be prompted to log in again before you can add, update, or delete posts.

## Features

- User authentication: Sign up and sign in functionality
- User sessions: Users remain logged in until they choose to log out
- Homepage: Displays existing blog posts
- Blog post details: Displays post title, contents, post creator's username, and date created
- Comments: Users can leave comments on blog posts
- Dashboard: Allows users to view, create, update, and delete their blog posts
- Idle timeout: Users are prompted to log in again after being idle for a set time

## Usage

To use this CMS-style blog site, follow these steps:

1. Visit the site and sign up or sign in.
2. On the homepage, you can view existing blog posts.
3. Click on a blog post to view its details and leave a comment if desired.
4. Click on the dashboard link in the navigation to access your dashboard.
5. In the dashboard, you can view, create, update, and delete your blog posts.
6. To add a new blog post, click on the "Add New Post" button and enter a title and contents.
7. To update or delete an existing post, click on the respective post in the dashboard and choose the appropriate action.
8. Click on the logout link in the navigation to sign out.

## Installation

To install and run the CMS-style blog site locally, follow these steps:

1. Clone the repository:
git clone 

2. Navigate to the project directory:

cd techBlog

3. Install the required dependencies:

npm install


4. Set up the database:

- Create a MySQL database.
- Update the database connection settings in the `.env` file.

5. Run the database migrations:

npm run db:migrate


6. Start the application:


7. Access the application in your browser at `http://localhost:3000`.

## Dependencies

The CMS-style blog site relies on the following dependencies:

- Express.js: Web application framework
- Sequelize: Promise-based ORM for database operations
- MySQL2: MySQL database driver
- Handlebars: Templating engine for views
- Passport: Authentication middleware
- bcrypt: Password hashing library
- Connect-Session-Sequelize: Session storage for Sequelize
- dotenv: Environment variable management

These dependencies will be installed automatically when you follow the installation steps mentioned above.

## Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes in the branch.
4. Commit your changes.
5. Push the branch to your forked repository.
6. Submit a pull request describing your changes.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Questions

If you have any questions or need further assistance, please feel free to reach out.

- GitHub: [burrielrush](https://github.com/burrielrush)
- Email: [burrielrush@gmail.com]

