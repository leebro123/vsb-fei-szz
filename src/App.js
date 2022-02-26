
import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import TopMenu from './TopMenu';
import SideMenu from './SideMenu';


function App() {
    const [section, setSection] = useState("optional")
    const [subSection, setSubsection] = useState("data_analysis")
    const [number, setNumber] = useState('1')

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

    return (
        <main>
            <TopMenu setSection={setSection} setSubsection={setSubsection}/>
            <div className='row'>

            <SideMenu section={section} subSection={subSection} setNumber={setNumber} />
            <div className="col-9">
                <Markdown>
                    {post}
                </Markdown>
            </div>
            </div>
        </main>
    );
}

export default App;