import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const Profile = () => {
    const { token, url } = useContext(StoreContext)
    const [profile, setProfile] = useState({})
    const [addresses, setAddresses] = useState([])
    const [newAddress, setNewAddress] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    })

    const fetchProfile = async () => {
        const response = await axios.post(url + "/api/user/profile", {}, { headers: { token } })
        if (response.data.success) {
            setProfile(response.data.data)
            setAddresses(response.data.data.addresses || [])
        }
    }

    useEffect(() => {
        if (token) {
            fetchProfile()
        }
    }, [token])

    const addAddress = async () => {
        const updatedAddresses = [...addresses, newAddress]
        const response = await axios.post(url + "/api/user/updateprofile", { userId: profile._id, addresses: updatedAddresses }, { headers: { token } })
        if (response.data.success) {
            setAddresses(updatedAddresses)
            setNewAddress({
                firstName: '',
                lastName: '',
                street: '',
                city: '',
                state: '',
                zipcode: '',
                country: '',
                phone: ''
            })
        }
    }

    return (
        <div className='profile'>
            <h2>My Profile</h2>
            <div className="profile-info">
                <p><strong>Name:</strong> {profile.name}</p>
                <p><strong>Email:</strong> {profile.email}</p>
            </div>
            <div className="addresses">
                <h3>Addresses</h3>
                {addresses.map((addr, index) => (
                    <div key={index} className="address">
                        <p>{addr.firstName} {addr.lastName}</p>
                        <p>{addr.street}, {addr.city}, {addr.state} {addr.zipcode}, {addr.country}</p>
                        <p>{addr.phone}</p>
                    </div>
                ))}
                <div className="add-address">
                    <h4>Add New Address</h4>
                    <input type="text" placeholder="First Name" value={newAddress.firstName} onChange={(e) => setNewAddress({ ...newAddress, firstName: e.target.value })} />
                    <input type="text" placeholder="Last Name" value={newAddress.lastName} onChange={(e) => setNewAddress({ ...newAddress, lastName: e.target.value })} />
                    <input type="text" placeholder="Street" value={newAddress.street} onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })} />
                    <input type="text" placeholder="City" value={newAddress.city} onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })} />
                    <input type="text" placeholder="State" value={newAddress.state} onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })} />
                    <input type="text" placeholder="Zip Code" value={newAddress.zipcode} onChange={(e) => setNewAddress({ ...newAddress, zipcode: e.target.value })} />
                    <input type="text" placeholder="Country" value={newAddress.country} onChange={(e) => setNewAddress({ ...newAddress, country: e.target.value })} />
                    <input type="text" placeholder="Phone" value={newAddress.phone} onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })} />
                    <button onClick={addAddress}>Add Address</button>
                </div>
            </div>
        </div>
    )
}

export default Profile