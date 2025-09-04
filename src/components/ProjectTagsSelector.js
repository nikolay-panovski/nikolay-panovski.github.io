
import ProjectTag from "./ProjectTag";


function ProjectTagsSelector() {

    const usedTags = [
        "Group Projects",
        "Student Assignments",
        "Writeups",
    ];

    const notUsedTags = [
        "demo",

        "Unity",
        "Godot",
        "JavaScript",
        "UI",
        "Device Communication",
        "Games",
        "Installations",
        "Practical",
        "Research",
    ];

    const usedTagsJSX = usedTags.map(tag => <ProjectTag key={tag} name={tag}/>);

    return (
        <>
            <div className="flex flex-row flex-wrap justify-center w-2/3 mx-auto my-8">
                {usedTagsJSX}
            </div>
        </>
    );
}


export default ProjectTagsSelector;