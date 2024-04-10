import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './dtos/createCategory.dto';
import { UpdateCategoryDto } from './dtos/updateCategory.dto';

@Controller('categories')
@ApiTags('Categories')
@ApiBearerAuth()
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  createCategory(@Body() body: CreateCategoryDto) {
    return this.categoryService.create(body);
  }

  @Get()
  getCategories() {
    return this.categoryService.find();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    return this.categoryService.findById(id);
  }

  @Put(':id')
  async updateCategoryById(
    @Param('id') id: string,
    @Body() body: UpdateCategoryDto,
  ) {
    return this.categoryService.updateById(id, body);
  }

  @Delete(':id')
  async deleteCategoryById(@Param('id') id: string) {
    return this.categoryService.removeById(id);
  }
}
