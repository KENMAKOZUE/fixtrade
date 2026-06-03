import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { Home } from './pages/Home';
import { AddListing } from './pages/AddListing';
import { Catalog } from './pages/Catalog';
import { Chats } from './pages/Chats';
import { Profile } from './pages/Profile';
import { ProfileEdit } from './pages/Profile_edit';
import { Favorites } from './pages/Favorites';
import { Notifications } from './pages/Notifications';
import { MyListings } from './pages/MyListings';
import { SafeDeals } from './pages/SafeDeals';
import { Settings } from './pages/Settings';
import { NearbyShops } from './pages/NearbyShops';
import { ChatThread } from './pages/ChatThread';
import { ListingDetail } from './pages/ListingDetail';
import { Support } from './pages/Support';
import { ShopDetail } from './pages/ShopDetail';
import { WorkshopsMap } from './pages/WorkShopMap';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
          <Route path="/add-listing" element={<AddListing />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/chat/:id" element={<ChatThread />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile_edit" element={<ProfileEdit />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/my-listings" element={<MyListings />} />
          <Route path="/safe-deals" element={<SafeDeals />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/shops" element={<NearbyShops />} />
          <Route path="/support" element={<Support />} />
          <Route path="/shop/:id" element={<ShopDetail />} />
          <Route path="/workshops" element={<WorkshopsMap />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
