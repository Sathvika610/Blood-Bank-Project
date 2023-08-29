import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          A blood bank is a facility that collects, stores, tests, and preserves blood donations for later use in blood transfusions. Blood banks play a crucial role in healthcare by ensuring a steady supply of blood and blood products for patients in need. These facilities gather blood from voluntary donors, separate it into different components, perform necessary tests to ensure safety and compatibility, and store it until required. The stored blood can then be used for various medical procedures, surgeries, emergencies, and treatments. Blood banks are essential for maintaining a stable and accessible blood supply to save lives and support medical treatments
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
