import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='Blog-page'>
            <div className='blog-bg'>
                <h2>Blog page</h2>
            </div>
            <div className='blogs'>
                <div className="blog">
                    <h3>a. When should you use context API?</h3>
                    <hr />
                    <p><b><u>Answer:</u></b> We should use context API when multiple components need to share state, and there is a lot of nesting. The data you have in one component will typically only be relevant to its children, so passing it in props is more indicative and better.</p>
                </div>
                <div className="blog">
                    <h3>b. What is a custom hook?</h3>
                    <hr />
                    <p><b><u>Answer:</u></b> A custom hook is a one kind of JavaScript function. It's name starts with 'use' and can be used to call other hooks. The major differences between a custom React JS hook and React JS components is a custom hook does not require a specific signature. </p>
                </div>
                <div className="blog">
                    <h3>c. What is useRef?</h3>
                    <hr />
                    <p><b><u>Answer:</u></b> useRef is a built-in React hook which accepts one argument as the initial value and returns a reference. A reference is an object having a special property current. useRef doesn't require a component to re-render when the value or state changes. It allows us to persist values between renders</p>
                </div>
                <div className="blog">
                    <h3>d. What is useMemo?</h3>
                    <hr />
                    <p><b><u>Answer:</u></b> useMemo is a React Hook. It caches the result of a calculation between re-renders. It also returns a memoized value.</p>
                </div>

            </div>

        </div>
    );
};

export default Blog;