import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { HousingLocation } from '@homes-app/shared/models';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  getAll(): HousingLocation[] {
    return this.locationsService.getAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number): HousingLocation {
    return this.locationsService.getById(id);
  }
}
