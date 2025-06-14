import 'package:flutter/material.dart';

class ServiceListScreen extends StatelessWidget {
  const ServiceListScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Services')),
      body: ListView(
        children: const [
          ListTile(title: Text('Food Delivery')),
          ListTile(title: Text('Grocery Orders')),
          ListTile(title: Text('Parcel Pickup/Drop')),
          ListTile(title: Text('Home Services')),
        ],
      ),
    );
  }
}
