import 'package:geolocator/geolocator.dart';

class LocationService {
  Future<Position> getCurrentLocation() async {
    return Geolocator.getCurrentPosition();
  }
}
