import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {SQLite, SQLiteObject} from "@awesome-cordova-plugins/sqlite/ngx"

export interface Profesor {
  ProfesorID: number;
  Nombre: string;
  Apellido: string;
  CorreoElectronico: string;
  Telefono: string;
  Contrasena: string;
}

export interface Alumno {
  AlumnoID: number;
  Nombre: string;
  Apellido: string;
  CorreoElectronico: string;
  Telefono: string;
  Contrasena: string;
}

export interface Asignatura {
  AsignaturaID: number;
  NombreAsignatura: string;
  DescripcionAsignatura: string;
}

export interface Clase {
  ClaseID: number;
  ProfesorID: number;
  AsignaturaID: number;
  Horario: string;
  FechaClase: string;
  Aula: string;
}

export interface Asistencia {
  AsistenciaID: number;
  AlumnoID: number;
  ClaseID: number;
  FechaAsistencia: string;
  EstadoAsistencia: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
private database!: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  profesores = new BehaviorSubject<Profesor[]>([]);
  alumnos = new BehaviorSubject<Alumno[]>([]);
  asignaturas = new BehaviorSubject<Asignatura[]>([]);
  clases = new BehaviorSubject<Clase[]>([]);
  asistencias = new BehaviorSubject<Asistencia[]>([]);

  constructor(private plt: Platform, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'sqlite.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        this.database = db;
        this.createTables();
      });
    });
  }


  createTables() {
    const queries = [
      `CREATE TABLE IF NOT EXISTS Profesores (
        ProfesorID INTEGER PRIMARY KEY,
        Nombre TEXT,
        Apellido TEXT,
        CorreoElectronico TEXT,
        Telefono TEXT,
        Contrasena TEXT
      )`,
      `CREATE TABLE IF NOT EXISTS Alumnos (
        AlumnoID INTEGER PRIMARY KEY,
        Nombre TEXT,
        Apellido TEXT,
        CorreoElectronico TEXT,
        Telefono TEXT,
        Contrasena TEXT
      )`,
      `CREATE TABLE IF NOT EXISTS Asignaturas (
        AsignaturaID INTEGER PRIMARY KEY,
        NombreAsignatura TEXT,
        DescripcionAsignatura TEXT
      )`,
      `CREATE TABLE IF NOT EXISTS Clases (
        ClaseID INTEGER PRIMARY KEY,
        ProfesorID INTEGER,
        AsignaturaID INTEGER,
        Horario TEXT,
        FechaClase TEXT,
        Aula TEXT
      )`,
      `CREATE TABLE IF NOT EXISTS Asistencia (
        AsistenciaID INTEGER PRIMARY KEY,
        AlumnoID INTEGER,
        ClaseID INTEGER,
        FechaAsistencia TEXT,
        EstadoAsistencia TEXT
      )`
    ];

    this.database.sqlBatch(queries)
      .then(() => {
        this.seedDatabase();
      })
      .catch(e => console.error('Error creating tables', e));
  }

  seedDatabase() {
    this.http.get('assets/seed.sql', { responseType: 'text' })
      .subscribe(sql => {
        this.database.sqlBatch([sql]) // Envuelve la consulta SQL en un arreglo
          .then(_ => {
            this.loadProfesores();
            this.loadAlumnos();
            this.loadAsignaturas();
            this.loadClases();
            this.loadAsistencias();
            this.dbReady.next(true);
          })
          .catch(e => console.error(e));
      });
  }
  getDatabaseState() {
    return this.dbReady.asObservable();
  }

  loadProfesores() {
    const query = 'SELECT * FROM Profesores';
    this.database.executeSql(query, []).then((data) => {
      const profesores: Profesor[] = [];
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          profesores.push(data.rows.item(i));
        }
      }
      this.profesores.next(profesores);
    }).catch((error) => {
      console.error('Error al cargar profesores', error);
    });
  }

  loadAlumnos() {
    const query = 'SELECT * FROM Alumnos';
    this.database.executeSql(query, []).then((data) => {
      const alumnos: Alumno[] = [];
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          alumnos.push(data.rows.item(i));
        }
      }
      this.alumnos.next(alumnos);
    }).catch((error) => {
      console.error('Error al cargar alumnos', error);
    });
  }

  loadAsignaturas() {
    const query = 'SELECT * FROM Asignaturas';
    this.database.executeSql(query, []).then((data) => {
      const asignaturas: Asignatura[] = [];
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          asignaturas.push(data.rows.item(i));
        }
      }
      this.asignaturas.next(asignaturas);
    }).catch((error) => {
      console.error('Error al cargar asignaturas', error);
    });
  }

  loadClases() {
    const query = 'SELECT * FROM Clases';
    this.database.executeSql(query, []).then((data) => {
      const clases: Clase[] = [];
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          clases.push(data.rows.item(i));
        }
      }
      this.clases.next(clases);
    }).catch((error) => {
      console.error('Error al cargar clases', error);
    });
  }

  loadAsistencias() {
    const query = 'SELECT * FROM Asistencia';
    this.database.executeSql(query, []).then((data) => {
      const asistencias: Asistencia[] = [];
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          asistencias.push(data.rows.item(i));
        }
      }
      this.asistencias.next(asistencias);
    }).catch((error) => {
      console.error('Error al cargar asistencias', error);
    });
  }

  async checkCredentials(email: string, password: string): Promise<boolean> {
    const query = 'SELECT * FROM Profesores WHERE CorreoElectronico = ? AND Contrasena = ?';
    const params = [email, password];
  
    return this.database.executeSql(query, params).then((result) => {
      return result.rows.length > 0;
    });
  }
  


  getProfesores(): Observable<Profesor[]> {
    return this.profesores.asObservable();
  }

  getAlumnos(): Observable<Alumno[]> {
    return this.alumnos.asObservable();
  }

  getAsignaturas(): Observable<Asignatura[]> {
    return this.asignaturas.asObservable();
  }

  getClases(): Observable<Clase[]> {
    return this.clases.asObservable();
  }

  getAsistencias(): Observable<Asistencia[]> {
    return this.asistencias.asObservable();
  }


}
