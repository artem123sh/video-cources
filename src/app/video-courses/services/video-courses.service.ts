import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Author, Course } from '../shared/models/course.model';
import { environment } from '../../../environments/environment';

type CourseDto = {
  authors: Author[];
  date: string;
  description: string;
  id: number;
  isTopRated: boolean;
  length: number;
  name: string;
};

@Injectable({
  providedIn: 'root',
})
export class VideoCoursesService {
  private static courseMapper(courseDto: CourseDto): Course {
    const { date: createdDate, length: duration, name: title, ...rest } = courseDto;
    return { createdDate, duration, title, ...rest };
  }

  private static courseDtoMapper(course: Omit<Course, 'id'>): Omit<CourseDto, 'id'> {
    const { createdDate: date, duration: length, title: name, ...rest } = course;
    return { date, length, name, ...rest };
  }

  constructor(private http: HttpClient) {}

  public getCourses(start: number, count: number, textFragment: string = ''): Observable<Course[]> {
    return this.http
      .get<CourseDto[]>(`${environment.apiUrl}/courses`, {
        params: {
          start: start.toString(),
          count: count.toString(),
          textFragment,
          sort: 'date',
        },
      })
      .pipe(map((courses: CourseDto[]) => courses.map((course) => VideoCoursesService.courseMapper(course))));
  }

  public createItem(course: Omit<Course, 'id'>) {
    const courseDto = VideoCoursesService.courseDtoMapper(course);
    return this.http.post<Omit<Course, 'id'>>(`${environment.apiUrl}/courses`, courseDto);
  }

  public getCourseById(courseId: number): Observable<Course | null> {
    return this.http
      .get<CourseDto>(`${environment.apiUrl}/courses/${courseId}`)
      .pipe(map((course: CourseDto) => VideoCoursesService.courseMapper(course)));
  }

  public updateCourse(course: Course): Observable<any> {
    return this.http.patch(`${environment.apiUrl}/courses/${course.id}`, VideoCoursesService.courseDtoMapper(course));
  }

  public removeCourse(courseId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/courses/${courseId}`);
  }
}
