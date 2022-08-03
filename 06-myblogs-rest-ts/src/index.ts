import { BlogsAPI } from './blogs-api-client.js';
import { Post, PostCreateDto } from './posts.js';
import { IdType } from './shared-types.js';

const postsSection = document.getElementById("posts")!;
const erorrsDiv = document.getElementById("errors")!;
const addPostForm = document.getElementById("add-post-form")! as HTMLFormElement;
addPostForm.addEventListener('submit', handleSubmitPost);
addPostForm.addEventListener('reset', resetForm);
const ALL_POSTS: any[] = [];
async function init() {
  try {
    const allPosts = await BlogsAPI.getAllPosts();
    showPosts(allPosts);
  } catch (err) {
    showError(err);
  }
}

export function showPosts(posts: Post[]) {
  posts.forEach(post => addPost(post));
}

export function showError(err: any) {
  erorrsDiv.innerHTML = `<div>${err}</div>`;
}

export function addPost(post: Post) {
  const postElem = document.createElement('article');
  postElem.setAttribute('id', post.id.toString());
  postElem.className = "col s12 m6 l4";
  postElem.innerHTML = `
  <div class="card">
  <div class="card-image waves-effect waves-block waves-light">
    <img class="activator" src="${post.imageUrl}">
  </div>
  <div class="card-content">
    <span class="card-title activator grey-text text-darken-4"> <button class="card-title activator btn waves-effect waves-light light-blue darken-1" type="button" id="edit">Edit
    <i class="material-icons right">edit</i>
  </button>
  ${post.title}</span>
    <p>Author: ${post.authorId}, <br> Tags: ${post.tags ? post.tags.join(', ') : 'no tags'} <br> Description : ${post.content}</p>
  </div>
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">${post.title}<i class="material-icons right">close</i></span>
    <div class="row">
              <form id="add-post-form-1" class="col s12">
                  <div class="row">
                      <div class="input-field col s6">
                          <input id="title1" name="title1" type="text"
                              class="validate">
                          <label for="title1">Blog Title</label>
                      </div>
                      <div class="input-field col s6">
                          <input id="authorId1" name="authorId1" type="text" class="validate">
                          <label for="authorId1">Author ID</label>
                      </div>
                  </div>
                  <div class="row">
                      <div class="input-field col s12">
                          <textarea id="content1" name="content1" class="materialize-textarea"></textarea>
                          <label for="content1">Post Text</label>
                      </div>
                  </div>
                  <div class="row">
                      <div class="input-field col s12">
                          <input id="imageUrl1" name="imageUrl1" type="url"
                              class="validate">
                          <label for="imageUrl1">Blog Image URL</label>
                      </div>
                  </div>
                  <div class="row">
                  <div class="chips">
                      <input placeholder="Blog tags here ..." id="tags1" name="tags1" class="tags">
                  </div>
              </div>
                  <button class="btn waves-effect waves-light " type="button" name="edit1" id="edit1">Edit
                      <i class="material-icons right">send</i>
                  </button>
                  <button class="btn waves-effect waves-light orange darken-1 " type="reset">Reset
                      <i class="material-icons right ">cached</i>
                  </button>
              </form>
          </div>
      </div>
  </div>
  </div>
  <div class="card-action">
    </button>
    <button class="btn waves-effect waves-light red lighten-1" type="button" id="delete">Delete
      <i class="material-icons right">backspace</i>
    </button>
  </div>
  </div>
  
    `;
  postsSection.insertAdjacentElement("beforeend", postElem);
  postElem.querySelector('#delete')!.addEventListener('click', event => deletePost(post.id))
}

async function handleSubmitPost(event: SubmitEvent) {
  try {
    event.preventDefault();
    const formData = new FormData(addPostForm);
    type PostDict = {
      [key:string]: string 
    };
    const np: PostDict = {};
    formData.forEach((value, key) => {
      np[key] = value.toString();
    })
    // const post = newPost as unknown as Post;
    const newPost = new PostCreateDto(np.title, np.content, np.tags.split(/\W+/), np.imageUrl, parseInt(np.authorId) || 1);
    const created = await BlogsAPI.addNewPost(newPost);
    addPost(created);
    resetForm();
  } catch (err) {
    showError(err);
  }
}

export function resetForm() {
  addPostForm.reset();
}

export function deletePost(postId: IdType) {
  console.log(postId);
  const article = document.getElementById(postId);
  article!.remove();
  BlogsAPI.deletePostById(postId);
}
export function editPost(postId: number) {
  const editedPost = ALL_POSTS.find((post: { id: number; }) => post.id === postId);
  console.log(editedPost);
}


init()