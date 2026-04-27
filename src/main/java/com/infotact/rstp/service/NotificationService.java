package com.infotact.rstp.service;

import com.infotact.rstp.dto.NotificationDTO;
import com.infotact.rstp.entity.NotificationType;

import java.util.List;

public interface NotificationService {
    NotificationDTO createAndBroadcastNotification(Long userId, Long shipmentId, String message, NotificationType type);
    List<NotificationDTO> getUserNotifications(Long userId);
    List<NotificationDTO> getUnreadNotifications(Long userId);
    void markAsRead(Long notificationId);
}
