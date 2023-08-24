/* eslint-disable react-hooks/rules-of-hooks */
// @ts-nocheck

import React, { useState, useEffect } from 'react';
import styles from "../styles/Users/userProfile.module.css";
import MainTab from '@/components/user-profile/Tabs/mainTab';
import SecondTab from '@/components/user-profile/Tabs/secondTab';

const userProfile = () => {
  return (
    <div>

        <div className={styles.userNameEmailContainer}>
            <h1>
                John Doe
            </h1>

            <p>
                johndoe@example.com
            </p>

        </div>

        <div className={styles.mainContent}>
            <MainTab />
            <SecondTab />
        </div>
    </div>
  );
};

export default userProfile;