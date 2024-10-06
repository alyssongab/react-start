import { useSearchParams } from "react-router-dom";

function TaskPage() {

    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return (
        <div className="w-screen h-screen bg-zinc-900 justify-center p-6">
            <h1 className="text-white">{title}</h1>
            <p className="text-white">{description}</p>
        </div>
    );
}

export default TaskPage;    