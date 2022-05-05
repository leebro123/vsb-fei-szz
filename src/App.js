
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import TopMenu from './TopMenu';
import SideMenu from './SideMenu';
import 'katex/dist/katex.min.css'


function App() {
    const [section, setSection] = useState("optional")
    const [subSection, setSubsection] = useState("data_analysis")
    const [number, setNumber] = useState('01')

    const [post, setPost] = useState('');

    useEffect(() => {
        import(`./questions/${section}/${subSection}/${number}.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });

    const components = {
        img: ({
            alt,
            src,
            title,
        }) => (
            <img 
                alt={alt} 
                src={process.env.PUBLIC_URL + src} 
                title={title} 
                style={{}}  />
        ),
    };

    return (
        <main>
            <TopMenu setSection={setSection} setSubsection={setSubsection}/>
            <div className='row'>

            <SideMenu section={section} subSection={subSection} setNumber={setNumber} />
            <div className="col-9">
                <ReactMarkdown
                    escapeHtml={false}
                    children={post}
                    remarkPlugins={[remarkGfm,remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={components}/>
            </div>
            </div>
        </main>
    );
}

export default App;