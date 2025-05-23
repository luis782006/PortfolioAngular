import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'; // Optional: to simulate network delay
import { environment } from '../../environments/environment';

// Import mock data
import * as mockPersonas from '../mocks/personas.mock.json';
import * as mockEducacion from '../mocks/educacion.mock.json';
import * as mockExperiencias from '../mocks/experiencias.mock.json';
import * as mockHardSoftSkill from '../mocks/hardsoftskill.mock.json';
import * as mockProyectos from '../mocks/proyectos.mock.json';
import * as mockJwt from '../mocks/jwt.mock.json';

@Injectable()
export class MockHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!environment.useMockApi) {
      return next.handle(request);
    }

    const { url, method, body } = request;
    const urlBase = environment.api; // Get the base API URL from environment

    console.log('MockHttpInterceptor: Intercepted request to', url);

    // Helper function to create a success response
    const createResponse = (data: any) => {
      // The '.default' is often needed when importing JSON files like this in ES modules
      const responseData = data.default || data;
      return of(new HttpResponse({ status: 200, body: responseData })).pipe(delay(300)); // Simulate delay
    };
    
    // Helper function to create a simple success response for POST/PUT/DELETE
    const createActionSuccessResponse = (actionBody?: any) => {
        return of(new HttpResponse({ status: 200, body: actionBody || { message: 'Operation successful' } })).pipe(delay(300));
    };

    // AUTHENTICATION
    if (url.startsWith(urlBase + 'auth/login') && method === 'POST') {
      console.log('MockHttpInterceptor: Mocking login response');
      // You might want to check credentials from `body` if needed for more complex mock
      return createResponse(mockJwt);
    }
    if (url.startsWith(urlBase + 'auth/nuevo') && method === 'POST') {
      console.log('MockHttpInterceptor: Mocking new user response');
      return createActionSuccessResponse({ message: 'Usuario registrado exitosamente' });
    }

    // PERSONAS
    if (url.startsWith(urlBase + 'personas/listar') && method === 'GET') {
      return createResponse(mockPersonas);
    }
    if (url.match(urlBase + 'personas/buscar/\\d+$') && method === 'GET') {
      const id = parseInt(url.split('/').pop()!, 10);
      const personasArray = mockPersonas.default || mockPersonas;
      const persona = personasArray.find(p => p.id === id);
      return createResponse(persona || {});
    }
    if (url.startsWith(urlBase + 'personas/crear') && method === 'POST') {
        return createActionSuccessResponse(body); // Echo back the created object
    }
    if (url.match(urlBase + 'personas/editar/\\d+$') && method === 'PUT') {
        return createActionSuccessResponse(body); // Echo back the updated object
    }
    if (url.match(urlBase + 'personas/eliminar/\\d+$') && method === 'DELETE') {
        return createActionSuccessResponse();
    }

    // EDUCACION
    if (url.startsWith(urlBase + 'educacion/listar') && method === 'GET') {
      return createResponse(mockEducacion);
    }
    if (url.match(urlBase + 'educacion/buscar/\\d+$') && method === 'GET') {
      const id = parseInt(url.split('/').pop()!, 10);
      const educacionArray = mockEducacion.default || mockEducacion;
      const item = educacionArray.find(e => e.id === id);
      return createResponse(item || {});
    }
    if (url.startsWith(urlBase + 'educacion/crear') && method === 'POST') {
        return createActionSuccessResponse(body);
    }
    if (url.match(urlBase + 'educacion/editar/\\d+$') && method === 'PUT') {
        return createActionSuccessResponse(body);
    }
    if (url.match(urlBase + 'educacion/eliminar/\\d+$') && method === 'DELETE') {
        return createActionSuccessResponse();
    }

    // EXPERIENCIA
    if (url.startsWith(urlBase + 'experiencia/listar') && method === 'GET') {
      return createResponse(mockExperiencias);
    }
    if (url.match(urlBase + 'experiencia/buscar/\\d+$') && method === 'GET') {
      const id = parseInt(url.split('/').pop()!, 10);
      const experienciasArray = mockExperiencias.default || mockExperiencias;
      const item = experienciasArray.find(e => e.id === id);
      return createResponse(item || {});
    }
    if (url.startsWith(urlBase + 'experiencia/crear') && method === 'POST') {
        return createActionSuccessResponse(body);
    }
    if (url.match(urlBase + 'experiencia/editar/\\d+$') && method === 'PUT') {
        return createActionSuccessResponse(body);
    }
    if (url.match(urlBase + 'experiencia/eliminar/\\d+$') && method === 'DELETE') {
        return createActionSuccessResponse();
    }

    // HARDSOFTSKILL
    if (url.startsWith(urlBase + 'hardsoft/listar') && method === 'GET') {
      return createResponse(mockHardSoftSkill);
    }
    if (url.match(urlBase + 'hardsoft/buscar/\\d+$') && method === 'GET') {
      const id = parseInt(url.split('/').pop()!, 10);
      const skillsArray = mockHardSoftSkill.default || mockHardSoftSkill;
      const item = skillsArray.find(s => s.id === id);
      return createResponse(item || {});
    }
    if (url.startsWith(urlBase + 'hardsoft/crear') && method === 'POST') {
        return createActionSuccessResponse(body);
    }
    if (url.match(urlBase + 'hardsoft/editar/\\d+$') && method === 'PUT') {
        return createActionSuccessResponse(body);
    }
    if (url.match(urlBase + 'hardsoft/eliminar/\\d+$') && method === 'DELETE') {
        return createActionSuccessResponse();
    }
    
    // PROYECTOS
    if (url.startsWith(urlBase + 'proyecto/listar') && method === 'GET') {
      return createResponse(mockProyectos);
    }
    if (url.match(urlBase + 'proyecto/buscar/\\d+$') && method === 'GET') {
      const id = parseInt(url.split('/').pop()!, 10);
      const proyectosArray = mockProyectos.default || mockProyectos;
      const item = proyectosArray.find(p => p.id === id);
      return createResponse(item || {});
    }
    if (url.startsWith(urlBase + 'proyecto/crear') && method === 'POST') {
        return createActionSuccessResponse(body);
    }
    if (url.match(urlBase + 'proyecto/editar/\\d+$') && method === 'PUT') {
        return createActionSuccessResponse(body);
    }
    if (url.match(urlBase + 'proyecto/eliminar/\\d+$') && method === 'DELETE') {
        return createActionSuccessResponse();
    }

    // If no mock matches, pass through (or handle as error)
    console.warn(\`MockHttpInterceptor: No mock handler for \${method} \${url}\`);
    return next.handle(request);
  }
}
