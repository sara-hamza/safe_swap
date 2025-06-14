import 'package:cloud_firestore/cloud_firestore.dart';

import 'order_model.dart';

class OrderService {
  final FirebaseFirestore _firestore;

  OrderService(this._firestore);

  Future<void> createOrder(Order order) async {
    await _firestore.collection('orders').doc(order.id).set({
      'service': order.service,
      'createdAt': order.createdAt.toIso8601String(),
    });
  }
}
