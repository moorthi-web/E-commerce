import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import _ from 'lodash';

export const Fileupload=()=>{
	
	
	
	
	const [selectedFile, setSelectedFile] = useState({
		image:''
	});
	const [isFilePicked, setIsFilePicked] = useState(false);
	
	const changeHandler =  async (event) => {
		console.log(event.target.files);
		event.preventDefault();
		setSelectedFile( event.target.files )
		let formData = new FormData();

		// console.log(selectedFile);
			_.forEach(event.target.files, (file)=>{
                 	console.log(file);	
		// 		console.log(file);
				formData.append('files',file);
			});
		
		// console.log(formData);
		// console.log(formData);
		
		await Axios.post('http://192.168.5.47:4500/upload',formData,{
			onUploadProgress:({total, loaded})=>{
				console.log(total, loaded);
			}
		})
		// 	Axios({
		// 		method: "POST",
		// 		url:'http://192.168.5.47:4500/upload',
		// 		data: formData,
		// 		headers: {
		// 		  "Content-Type": "multipart/form-data"
		// 		}
		// 	  })
		// .then(res => console.log(res))
		// .catch((error) => {
		// 	console.error('Error:', error);
		// });
			// setSelectedFile(event.target.files);
		
		setIsFilePicked(true);
	};

	const handleSubmission = (e) => {
         
        e.preventDefault();
        
	};
	



	// action='http://192.168.5.47:4500/upload' method='POST' encType='multipart/form-data'


    return(
        <>
            <div>
			<form onSubmit={(e)=>handleSubmission(e)} >
			<input type="file" name="files" multiple  onChange={changeHandler} />
			{isFilePicked ? (
				<div>
					{/* <p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p> */}
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button type='submit' >Submit</button>
			</div>
				</form>	
		</div>
        </>
    )
}




