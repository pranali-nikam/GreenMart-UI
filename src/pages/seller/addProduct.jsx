import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addProduct, getCategories } from "../../services/products";
import { toast } from "react-toastify";
import Modal from "react-modal"; // Import modal library
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles
import logo from '../../images/logo.png'; // Import the logo image

// Set the app element for the modal
Modal.setAppElement('#root');

const AddProductPage = () => {
  const { sellerId } = useParams();
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Error fetching categories");
      }
    };

    fetchCategories();
  }, []);

  const handleFileChange = (e) => {
    setImageUrl(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    setCategoryId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("categoryId", categoryId);
    if (imageUrl) {
      formData.append("imageUrl", imageUrl);
    }

    try {
      const response = await addProduct(formData, sellerId);
      console.log("Product added successfully:", response);
      toast.success("Product added successfully!");
      setIsModalOpen(true); // Open the modal on successful product addition

      // Reset form fields
      setProductName("");
      setDescription("");
      setPrice("");
      setStock("");
      setCategoryId("");
      setImageUrl(null);

    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Error adding product");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-3">
              <a className="navbar-brand" href="/">
                <img src={logo} alt="Logo" style={{ width: "120px" }} />
              </a>
            </div>
            <div className="col-md-6 text-center">
              <h2>Seller</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="div-center">
        <h2 className='page-title'>Add New Product</h2>

        <div className='row mt-5'>
          <div className='col-4'></div>

          <div className='col'>
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col'>
                  <div className='mb-3'>
                    <label htmlFor='productName'>Product Name</label>
                    <input
                      type='text'
                      id='productName'
                      className='form-control'
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col'>
                  <div className='mb-3'>
                    <label htmlFor='description'>Description</label>
                    <textarea
                      id='description'
                      className='form-control'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col'>
                  <div className='mb-3'>
                    <label htmlFor='price'>Price</label>
                    <input
                      type='number'
                      id='price'
                      step="0.01"
                      className='form-control'
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col'>
                  <div className='mb-3'>
                    <label htmlFor='stock'>Stock</label>
                    <input
                      type='number'
                      id='stock'
                      className='form-control'
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col'>
                  <div className='mb-3'>
                    <label htmlFor='categoryId'>Category</label>
                    <select
                      id='categoryId'
                      className='form-control'
                      value={categoryId}
                      onChange={handleCategoryChange}
                      required
                    >
                      <option value="" disabled>Select a category</option>
                      {categories.map((category) => (
                        <option key={category.categoryId} value={category.categoryId}>
                          {category.categoryName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col'>
                  <div className='mb-3'>
                    <label htmlFor='image'>Image</label>
                    <input
                      type='file'
                      id='image'
                      className='form-control'
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col'>
                  <button type="submit" className='btn btn-success'>
                    Add Product
                  </button>
                  <button type="button" className='btn btn-danger ms-2'>
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className='col-4'></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 GREENIFY</p>
      </footer>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Product Added"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Product Added Successfully!</h2>
        <button onClick={closeModal} className="btn btn-primary">Close</button>
      </Modal>
    </div>
  );
};

export default AddProductPage;
