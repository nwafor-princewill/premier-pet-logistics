export const USA_LOGISTICS_HUBS = [
  // Air Hubs
  { city: 'Memphis', state: 'TN', type: 'Air Hub', facility: 'FedEx Super Hub' },
  { city: 'Louisville', state: 'KY', type: 'Air Hub', facility: 'UPS Worldport' },
  { city: 'Anchorage', state: 'AK', type: 'Air Hub', facility: 'Ted Stevens International' },
  
  // Sea Ports
  { city: 'Los Angeles', state: 'CA', type: 'Sea Port', facility: 'Port of Los Angeles' },
  { city: 'Long Beach', state: 'CA', type: 'Sea Port', facility: 'Port of Long Beach' },
  { city: 'New York', state: 'NY', type: 'Sea Port', facility: 'Port of New York/New Jersey' },
  { city: 'Houston', state: 'TX', type: 'Sea Port', facility: 'Port of Houston' },
  { city: 'Savannah', state: 'GA', type: 'Sea Port', facility: 'Port of Savannah' },
  
  // Rail Hubs
  { city: 'Chicago', state: 'IL', type: 'Rail Hub', facility: 'Chicago Rail Hub' },
  { city: 'Kansas City', state: 'MO', type: 'Rail Hub', facility: 'BNSF Intermodal' },
  
  // Distribution Centers
  { city: 'Atlanta', state: 'GA', type: 'Distribution', facility: 'Southeast Distribution' },
  { city: 'Dallas', state: 'TX', type: 'Distribution', facility: 'Central Distribution' },
  { city: 'Phoenix', state: 'AZ', type: 'Distribution', facility: 'Southwest Distribution' },
  { city: 'Seattle', state: 'WA', type: 'Distribution', facility: 'Northwest Distribution' },
  { city: 'Miami', state: 'FL', type: 'Distribution', facility: 'Florida Distribution' },
];

export function getLocationString(location: typeof USA_LOGISTICS_HUBS[0]): string {
  return `${location.facility}, ${location.city}, ${location.state}`;
}