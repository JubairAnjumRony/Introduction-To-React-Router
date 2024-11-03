import { useLoaderData, useNavigate,useParams } from "react-router-dom";

const PostDetails = () => {
    const navigate =useNavigate();
    const post = useLoaderData();
    const {id,title,body} = post;
    let {postId} = useParams();
    // const params =useParams();
    const handleGoBack = ()=>{
       navigate(-1);
    }
    console.log(postId);
    // console.log(params);
    return (
        <div>
            <h2>
                ID NO: {id}
            </h2>
            <h3>{title}</h3>
            <h4>{body}</h4>
            <button onClick={handleGoBack}>GO Back</button>
        </div>
    );
};

export default PostDetails;