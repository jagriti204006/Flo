// // Profile.tsx
// // import React, { useState, useEffect } from 'react';
// // import './Profile.css';

// // interface UserProfile {
// //   fullName: string;
// //   username: string;
// //   email: string;
// //   dateOfBirth: string;
// //   profilePicture: string;
// // }

// // const Profile: React.FC = () => {
// //   const [profile, setProfile] = useState<UserProfile>({
// //     fullName: '',
// //     username: '',
// //     email: '',
// //     dateOfBirth: '',
// //     profilePicture: 'default-avatar.png',
// //   });

// //   useEffect(() => {
// //     const savedProfile = localStorage.getItem('userProfile');
// //     if (savedProfile) {
// //       setProfile(JSON.parse(savedProfile));
// //     }
// //   }, []);

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setProfile(prevProfile => ({
// //       ...prevProfile,
// //       [name]: value
// //     }));
// //   };

// //   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const file = e.target.files?.[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setProfile(prevProfile => ({
// //           ...prevProfile,
// //           profilePicture: reader.result as string
// //         }));
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     localStorage.setItem('userProfile', JSON.stringify(profile));
// //     alert('Profile saved successfully!');
// //   };

// //   return (
// //     <div className="profile-container">
// //       <h1>My Profile</h1>
// //       <form onSubmit={handleSubmit} className="profile-form">
// //         <div className="profile-picture-section">
// //           <img src={profile.profilePicture} alt="Profile" className="profile-picture" />
// //           <label htmlFor="profile-upload" className="upload-button">
// //             Upload Picture
// //           </label>
// //           <input
// //             id="profile-upload"
// //             type="file"
// //             accept="image/*"
// //             onChange={handleImageUpload}
// //             style={{ display: 'none' }}
// //           />
// //         </div>
// //         <div className="profile-details">
// //           <div className="form-group">
// //             <label htmlFor="fullName">Full Name</label>
// //             <input
// //               type="text"
// //               id="fullName"
// //               name="fullName"
// //               value={profile.fullName}
// //               onChange={handleInputChange}
// //               required
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="username">Username</label>
// //             <input
// //               type="text"
// //               id="username"
// //               name="username"
// //               value={profile.username}
// //               onChange={handleInputChange}
// //               required
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="email">Email Address</label>
// //             <input
// //               type="email"
// //               id="email"
// //               name="email"
// //               value={profile.email}
// //               onChange={handleInputChange}
// //               required
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="dateOfBirth">Date of Birth</label>
// //             <input
// //               type="date"
// //               id="dateOfBirth"
// //               name="dateOfBirth"
// //               value={profile.dateOfBirth}
// //               onChange={handleInputChange}
// //               required
// //             />
// //           </div>
// //         </div>
// //         <button type="submit" className="save-button">Save Changes</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Profile;







// // Profile.tsx
// import React, { useState, useEffect } from 'react';
// import './Profile.css';

// interface UserProfile {
//   fullName: string;
//   username: string;
//   email: string;
//   dateOfBirth: string;
//   profilePicture: string;
// }

// const Profile: React.FC = () => {
//   const [profile, setProfile] = useState<UserProfile>({
//     fullName: '',
//     username: '',
//     email: '',
//     dateOfBirth: '',
//     profilePicture: 'default-avatar.png',
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     const savedProfile = localStorage.getItem('userProfile');
//     if (savedProfile) {
//       setProfile(JSON.parse(savedProfile));
//     }
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setProfile(prevProfile => ({
//       ...prevProfile,
//       [name]: value
//     }));
//   };

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfile(prevProfile => ({
//           ...prevProfile,
//           profilePicture: reader.result as string
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     localStorage.setItem('userProfile', JSON.stringify(profile));
//     setIsEditing(false);
//     alert('Profile saved successfully!');
//   };

//   const toggleEdit = () => {
//     setIsEditing(!isEditing);
//   };

//   return (
//     <div className="profile-container">
//       <h1>THIS IS ME</h1>
//       <form onSubmit={handleSubmit} className="profile-form">
//         <div className="profile-picture-section">
//           <img src={profile.profilePicture} alt="Profile" className="profile-picture" />
//           <label htmlFor="profile-upload" className="upload-button">
//             Upload Picture
//           </label>
//           <input
//             id="profile-upload"
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             style={{ display: 'none' }}
//           />
//         </div>
//         <div className="profile-details">
//           <div className="form-group">
//             <label htmlFor="fullName">Full Name</label>
//             {isEditing ? (
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 value={profile.fullName}
//                 onChange={handleInputChange}
//                 required
//               />
//             ) : (
//               <div className="info-box">{profile.fullName}</div>
//             )}
//           </div>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             {isEditing ? (
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={profile.username}
//                 onChange={handleInputChange}
//                 required
//               />
//             ) : (
//               <div className="info-box">{profile.username}</div>
//             )}
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email Address</label>
//             {isEditing ? (
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={profile.email}
//                 onChange={handleInputChange}
//                 required
//               />
//             ) : (
//               <div className="info-box">{profile.email}</div>
//             )}
//           </div>
//           <div className="form-group">
//             <label htmlFor="dateOfBirth">Date of Birth</label>
//             {isEditing ? (
//               <input
//                 type="date"
//                 id="dateOfBirth"
//                 name="dateOfBirth"
//                 value={profile.dateOfBirth}
//                 onChange={handleInputChange}
//                 required
//               />
//             ) : (
//               <div className="info-box">{profile.dateOfBirth}</div>
//             )}
//           </div>
//         </div>
//         <div className="button-group">
//           {isEditing ? (
//             <button type="submit" className="save-button">Save Changes</button>
//           ) : (
//             <button type="button" onClick={toggleEdit} className="edit-button">Edit Profile</button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Profile;
import React from 'react';
import './Profile.css';

interface UserProfile {
  fullName: string;
  username: string;
  profilePicture: string;
}

interface ProfileProps {
  user: { fullName: string; username: string; profilePicture: string } | null;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      {user && (
        <div className="profile-form">
          <div className="profile-picture-section">
            <img src={user.profilePicture} alt="Profile" className="profile-picture" />
          </div>
          <div className="profile-details">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <div className="info-box">{user.fullName}</div>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <div className="info-box">{user.username}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;