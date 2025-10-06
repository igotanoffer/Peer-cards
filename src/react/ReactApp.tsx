import React, { useMemo, useState } from 'react';
import { data } from '../data';
import type { DayOption } from '../types/common';
import { ReactFilters } from './ReactFilters.tsx';
import { ReactPeerCard } from './ReactPeerCard.tsx';

import './react-styles.scss';

export default function ReactApp() {
    const [selectedDays] = useState<DayOption[]>(['All']);
    const peers = useMemo(() => data, []);

    const handleSelectDay = (day: DayOption) => {
        console.log('onSelectDay', day);
    };

    return (
        <div>
            <div className="react-app-header" />

            <div className="react-app-content">
                <div className="react-app-content-heading">Hi Patrik, schedule your next practice session with a peer</div>

                <ReactFilters selectedDays={selectedDays} onSelectDay={handleSelectDay} />

                <div>
                    {peers.map(peer => (
                        <ReactPeerCard key={peer.name} peer={peer} />
                    ))}
                </div>
            </div>
        </div>
    );
}
