package com.infotact.rstp.service;

import com.infotact.rstp.dto.TrackingEventDTO;
import java.util.List;

public interface TrackingService {
    TrackingEventDTO recordAndBroadcastEvent(TrackingEventDTO eventDto);
    List<TrackingEventDTO> getTrackingHistory(Long shipmentId);
}
