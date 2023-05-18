
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState } from 'react';

const Blog = () => {
    const [loader, setLoader] = useState(false);

    const downloadPDF = () => {
        const capture = document.querySelector('.blog-page');
        setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoader(false);
            doc.save('blog.pdf');

        })
    }


    return (
        <div>
            <div >
                <div>
                    <h1 className='text-4xl font-bold text-center p-4' >Blog</h1>
                </div>
                <h2 className='text-3xl font-bold text-center p-4'>Question and Answer </h2>
                <div >
                    <h3 className='font-bold'>Question-1: Tell us the differences between uncontrolled and controlled components?</h3>
                    <p>Answer:
                        <li>Uncontrolled components are those that operate independently and can modify data or state without external regulation or constraints, potentially leading to unexpected behavior.</li>
                        <li>Controlled components, on the other hand, are designed to operate within predefined boundaries and under the guidance of external constraints, ensuring predictable and consistent behavior.</li>

                    </p>
                </div>
                <div >
                    <h3 className='font-bold'>Question-2: How to validate React props using PropTypes?</h3>
                    <p>Answer: To validate React props using PropTypes, import the PropTypes library from the  package, define a propTypes object with the expected data types for each prop, and assign it to the  static propTypes property.</p>
                </div>
                <div >
                    <h3 className='font-bold'>Question-3: Tell us the difference between nodejs and express js.?</h3>
                    <p>Answer:
                        <li>Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a web application framework built on top of Node.js that simplifies the creation of web applications.</li>
                        <li>Node.js provides a set of built-in modules and APIs for performing tasks such as file system operations, networking, and event handling, while Express.js provides additional abstractions and features for handling HTTP requests and responses, routing, middleware, and more.</li>
                        <li>While Node.js can be used to create web servers and handle HTTP requests directly, using Express.js can simplify the process by providing a higher-level API and a more organized structure for building web applications.</li>
                        <li>Express.js also provides a wide range of middleware modules that can be used to add additional functionality to a web application, such as handling authentication, parsing request bodies, and caching responses, among others.</li>


                    </p>
                </div>
                <div >
                    <h3 className='font-bold'>Question-4: What is a custom hook, and why will you create a custom hook?</h3>
                    <p>Answer:
                        A custom hook is a JavaScript function that uses built-in hooks and/or other custom hooks to provide a specific functionality that can be reused across multiple components in a React application.

                        Creating a custom hook can help avoid code duplication and improve code organization by abstracting away complex logic into a single reusable hook.

                        Custom hooks can also improve code readability and reduce complexity by separating concerns and making it easier to reason about the behavior of individual components.</p>
                </div>
            </div>
            {/* <Button
                onClick={downloadPDF}
                disabled={!(loader === false)}>
                {loader ? (
                    <span>Downloading</span>
                ) : (
                    <span>Download</span>
                )}

            </Button> */}
            <button onClick={downloadPDF}
                disabled={!(loader === false)}
                className="btn btn-primary m-4 ">
                {loader ? (
                    <span>Downloading</span>
                ) : (
                    <span>Download</span>
                )}
            </button>

        </div>
    );
};

export default Blog;