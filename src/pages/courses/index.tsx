import Course from "@/components/Course";

export default function Courses() {
    return (
        <div>
            <Course
                description='Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even sync them in the cloud so you can use them anywhere. All that is free!'
                title='CPR Certification'
                image='https://images.unsplash.com/photo-1630964046403-8b745c1e3c69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80'
            />
            <Course
                description='Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even sync them in the cloud so you can use them anywhere. All that is free!'
                title='Baby Sitter Training'
                image='https://images.unsplash.com/photo-1636408366295-2bf003671931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            />
        </div>
    )
};
