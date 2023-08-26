import React, { useState } from 'react';
import './recipeform.css'

const RecipeForm = () => {
  const [recipeImage, setRecipeImage] = useState(null);
  const [recipeTitle, setRecipeTitle] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [recipeContent, setRecipeContent] = useState('');

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    // Validate file type and dimensions here
    setRecipeImage(file);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className='recipeForm'>
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className='recipeForm'>
          <label>
            Recipe Image:
            <input className = 'recipeInput' type="file" accept="image/jpeg, image/png" onChange={handleImageUpload} />
          </label>
        </div>
        <div className='recipeForm'>
          <label>
            Recipe Title:
            <input className = 'recipeInput' type="text" value={recipeTitle} onChange={(e) => setRecipeTitle(e.target.value)} />
          </label>
        </div>
        <div className='recipeForm'>
          <label className = 'titleLabel'>
            Recipe Description:
            <textarea 
              className = 'recipeDescription'
              value={recipeDescription}
              onChange={(e) => setRecipeDescription(e.target.value)}
            />
          </label>
        </div>
        <div className='recipeForm'>
          <label>
            Recipe Content:
            <textarea
              className='recipeArea'
              value={recipeContent}
              onChange={(e) => setRecipeContent(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RecipeForm;
