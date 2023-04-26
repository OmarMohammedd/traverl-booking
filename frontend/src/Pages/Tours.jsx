import React, { useState, useEffect} from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import TourCard from "../shared/TourCard";
// import SearchCard from "../shared/SearchBar";
import { Col, Container, Row } from "reactstrap";
import SearchBar from "../shared/SearchBar";
import Newsletter from "./../shared/Newsletter";
import UseFetch from "../hooks/UseFetch"
import { BASE_URL } from "../utils/config";


const Tours = () => {

  const [pageCount, setpageCount] = useState(0)
  const [page, setpage] = useState(0)

  const {data: tours, loading, error} = UseFetch(`${BASE_URL}/tours?page=${page}`)
  const {data: tourCount} = UseFetch(`${BASE_URL}/tours/search/getTourCount`)

  useEffect(() => {
     const pages = Math.ceil(tourCount/ 8) // (1) later we will use backend datq count
     setpageCount(pages)
     window.scrollTo(0,0)
  },[page, tourCount, tours])

  useEffect(() => {
    window.scrollTo(0,0,)
 }, [])

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">Loadiing.....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
            {
               !loading && !error && <Row>
               {tours?.map((tour) => (
                 <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
   
                   <TourCard tour={tour} />
                 </Col>
               ))}
   
               <Col lg="12">
                  <div className="pagination d-flex align-item-center
                   justify-content-center mt-4 gap-3">
                     {[...Array(pageCount).keys()].map(number=> (
                        <span key={number} onClick={()=> setpage(number)}
                         className={page === number ? "active__pae" : ""}>
                           {number +1 }
                        </span>
                     ))}
                  </div>
               </Col>
             </Row>
            }
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tours;
