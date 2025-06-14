import 'package:flutter/material.dart';

void main() {
  runApp(const ServixApp());
}

class ServixApp extends StatelessWidget {
  const ServixApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Servix',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Servix')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: const [
          ServiceTile(title: 'Food Delivery'),
          ServiceTile(title: 'Grocery Orders'),
          ServiceTile(title: 'Parcel Pickup/Drop'),
          ServiceTile(title: 'Home Services'),
        ],
      ),
    );
  }
}

class ServiceTile extends StatelessWidget {
  final String title;

  const ServiceTile({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        title: Text(title),
        trailing: const Icon(Icons.chevron_right),
        onTap: () {
          // TODO: navigate to service listing
        },
      ),
    );
  }
}
