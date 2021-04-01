import axios from 'axios'
import { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from './Sidebar'
import './admin.css'
const Create = () => {

    const [image, setImage] = useState(null)
    const { register, handleSubmit, watch, errors } = useForm();
    const handleImage = e => {
        const image = new FormData();
        image.set('key', '93806700d73c6e0cf4767ba7d1804c67');
        image.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            image)
            .then(res => {
                setImage(res.data.data.display_url);
            })
            .catch(err => console.log(err));
    }

    const onSubmit = data => {
        const { name, author, price } = data
        const bookInfo = {
            name: name,
            author: author,
            price: price,
            image: image
        };
        const url = `https://i-dev-pubs-backend.herokuapp.com/addBook`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(bookInfo)
        })
            .then(res => console.log('Book Info Uploaded', res))
            .catch(err => console.log(err))
    };


    return (
        <>
            <Sidebar />
            <div className="m-4 p-3">
                <div className="panel">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" name="name" defaultValue="Book Name" ref={register} className="form-control" />
                        {errors.name && <span>This field is required</span>}

                        <input type="text" name="author" defaultValue="Author Name" ref={register} className="form-control" />
                        {errors.author && <span>This field is required</span>}

                        <input type="number" name="price" ref={register} className="form-control" />
                        {errors.price && <span>This field is required</span>}

                        <input type="file" name="image" className="form-control" onChange={handleImage} />
                        {errors.image && <span>This field is required</span>}

                        <input type="submit" value="Add Book" className="btn btn-primary" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Create
