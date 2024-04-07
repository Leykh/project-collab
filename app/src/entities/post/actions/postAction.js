import firebaseSvc from "../../../services/firebaseSvc";

export const FetchAllPosts = () => async (dispatch) => {
    const categoryState = [];
    const doc = await firebaseSvc.getPosts();
    doc.forEach((category) => {
      categoryState.push({
        categoryId: category.id,
        ...category.data(),
      });
    });
    dispatch({
      type: "FETCH_ALL_POST",
      payload: categoryState,
    });
  };
export function CreatePost(dispatch,post)
{
    firebaseSvc.postPosts(post).then(() => {
        dispatch({   
            type: "CREATE_POST",
            payload:[]
        });
    })
}

export function deletePost()
{
    
}

export function editPost()
{
    
}

export function addItemPost()
{
    
}
