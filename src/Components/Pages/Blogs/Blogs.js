import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3 className='text-4xl text-center my-4 font-serif font-bold'>Our Blogs</h3>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way. It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class. Prototypes are hidden objects that are used to share the properties and methods of a parent class to child classes.Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class.Prototypes are hidden objects that are used to share the properties and methods of a parent class to child classes.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process. If done correctly, unit tests can detect early flaws in code which may be more difficult to find in later testing stages.Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually scrutinized for proper operation. Software developers and sometimes QA staff complete unit tests during the development process. The main objective of unit testing is to isolate written code to test and determine if it works as intended.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.ust a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js. if you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;