import React, { Fragment, useEffect, useState } from 'react'
import axios from'axios'
import { withLoading } from '../../HOC';
import { BasePage } from '../base-page';
import { Pagination } from '../pagination';
import { ProductCard } from './product-card';
import 'react-router-dom';
import './main.css';


export const ProductIndex = () => {
    const [allUsers, setAllUsers] = useState(null);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [isLoading, setIsLoading] = useState(true);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["description", "title"]);
    const [pageInfo, setPageInfo] = useState({
        limit: 100,
        skip: 0,
        currentPage: 1,
      });
      const BasePageWithLoading = withLoading(BasePage);
      useEffect(() => {
        setIsLoading(true);
        axios
          .get(`https://dummyjson.com/products?limit=${pageInfo.limit}&skip=${pageInfo.skip}`)
          .then((response) => {
            console.log(response);
            setAllUsers(response.data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [pageInfo]);
      const nextPageHandler = () => {
        setPageInfo({
          ...pageInfo,
          skip: pageInfo.skip + pageInfo.limit,
          currentPage: pageInfo.currentPage + 1,
        });
      };
      const prevPageHandler = () => {
        setPageInfo({
          ...pageInfo,
          skip: pageInfo.skip - pageInfo.limit,
          currentPage: pageInfo.currentPage - 1,
        });
      };
    
      const firstPageHandler = () => {
        setPageInfo({
          ...pageInfo,
          skip: 0,
          currentPage: 1,
        });
      };
    
      const lastPageHandler = () => {
        setPageInfo({
          ...pageInfo,
          skip: allUsers.total - pageInfo.limit,
          currentPage: Math.ceil(allUsers.total / pageInfo.limit),
        });
      };
    
      const pageChangeHandler = (pageNo) => {
        setPageInfo({
          ...pageInfo,
          skip: (pageNo - 1) * pageInfo.limit,
          currentPage: pageNo,
        });
      }
      function search(allUsers) {
        // eslint-disable-next-line array-callback-return
        return allUsers.filter((item) => {
            if (item.category === filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            } 
            else if (filterParam === "All") {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }
  return (
    <BasePageWithLoading isLoading={isLoading} title={'Products'}>
      <input
        type="search"
        name="search-form"
        id="search-form"
        className="search-input"
        placeholder="Search for..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <br />
      <form
      className='row , form-design'
       onChange={(e) => {setFilterParam(e.target.value);}}
      >
        <input type="checkbox" id="All" name="All" value="All"/>
        <label htmlFor='All'> ALL</label>
        <input type="checkbox" id="smartphones" name="smartphones" value="smartphones"/>
        <label htmlFor="smartphones"> smartphones</label>
        <input type="checkbox" id="laptops" name="laptops" value="laptops"/>
        <label htmlFor="laptops">laptops</label>
        <input type="checkbox" id="fragrances" name="fragrances" value="fragrances"/>
        <label htmlFor="fragrances">fragrances</label>
        <input type="checkbox" id="skincare" name="skincare" value="skincare"/>
        <label htmlFor="skincare">skincare</label>
        <input type="checkbox" id="groceries" name="groceries" value="groceries"/>
        <label htmlFor="groceries">groceries</label>
        <input type="checkbox" id="home-decoration" name="home-decoration" value="home-decoration"/>
        <label htmlFor="home-decoration">home-decoration</label>
        <input type="checkbox" id="furniture" name="furniture" value="furniture"/>
        <label htmlFor="furniture">furniture</label>
        <input type="checkbox" id="tops" name="tops" value="tops"/>
        <label htmlFor="tops">tops</label>
        <input type="checkbox" id="womens-dresses" name="womens-dresses" value="womens-dresses"/>
        <label htmlFor="womens-dresses">womens-dresses</label>
        <input type="checkbox" id="womens-shoes" name="womens-shoes" value="womens-shoes"/>
        <label htmlFor="womens-shoes">womens-shoes</label>
        <input type="checkbox" id="mens-shirts" name="mens-shirts" value="mens-shirts"/>
        <label htmlFor="mens-shirts">mens-shirts</label>
        <input type="checkbox" id="mens-shoes" name="mens-shoes" value="mens-shoes"/>
        <label htmlFor="mens-shoes">mens-shoes</label>
        <input type="checkbox" id="mens-watches" name="mens-watches" value="mens-watches"/>
        <label htmlFor="mens-watches">mens-watches</label>
        <input type="checkbox" id="womens-watches" name="womens-watches" value="womens-watches"/>
        <label htmlFor="womens-watches">womens-watches</label>
        <input type="checkbox" id="womens-bags" name="womens-bags" value="womens-bags"/>
        <label htmlFor="womens-bags">womens-bags</label>
        <input type="checkbox" id="womens-jewellery" name="womens-jewellery" value="womens-jewellery"/>
        <label htmlFor="womens-jewellery">womens-jewellery</label>
        <input type="checkbox" id="sunglasses" name="sunglasses" value="sunglasses"/>
        <label htmlFor="sunglasses">sunglasses</label>
        <input type="checkbox" id="automotive" name="automotive" value="automotive"/>
        <label htmlFor="automotive">automotive</label>
        <input type="checkbox" id="motorcycle" name="motorcycle" value="motorcycle"/>
        <label htmlFor="motorcycle">motorcycle</label>
        <input type="checkbox" id="lighting" name="lighting" value="lighting"/>
        <label htmlFor="lighting">lighting</label>
      </form>
      {allUsers && allUsers.products.length > 0 ? (
        <Fragment>
          <div className='row'>
            {search(allUsers.products).map((user) => (
              <div key={user.id} className='col-sm-6 col-md-4'>
                <ProductCard
                  id={user.id}
                  title={user.title}
                  description={user.description}
                  price={user.price}
                  brand={user.brand}
                  category={user.category}
                  rating={user.rating}
                  images={user.images}
                />
              </div>
            ))}
          </div>
          <Pagination
            pageCount={Math.ceil(allUsers.total / pageInfo.limit)}
            currentPage={pageInfo.currentPage}
            onNextPage={nextPageHandler}
            onPrevPage={prevPageHandler}
            onFirstPage={firstPageHandler}
            onLastPage={lastPageHandler}
            onPageChange={pageChangeHandler}
            itemsPerPage={pageInfo.limit}
          />
        </Fragment>
      ) : (
        <p className='list-empty'>List is empty</p>
      )}
    </BasePageWithLoading>
  )
}
