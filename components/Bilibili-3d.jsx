import React, { useEffect } from 'react';
import { useRef } from 'react';

import * as THREE from 'three';

import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
const Bilibili3d = () => {
    const biliRef = useRef(null)
    let camera, scene, renderer;
    let controls;

    useEffect(() => {

        function Element(bv, x, y, z, ry) {

            const div = document.createElement('div');
            div.style.width = '480px';
            div.style.height = '360px';
            div.style.backgroundColor = '#000';

            const iframe = document.createElement('iframe');
            iframe.style.width = '480px';
            iframe.style.height = '320px';
            iframe.style.border = '0px';
            // https://www.bilibili.com/video/BV1GV411m74a?spm_id_from=333.999.0.0
            iframe.src = ['https://www.bilibili.com/video/', bv].join('');
            div.appendChild(iframe);

            const object = new CSS3DObject(div);
            object.position.set(x, y, z);
            object.rotation.y = ry;

            return object;

        };

        init();
        animate();

        function init() {

            const container = biliRef.current;

            camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000);
            camera.position.set(500, 350, 850);

            scene = new THREE.Scene();

            renderer = new CSS3DRenderer();
            renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.2);
            // renderer.setClearColor(0x000000, 1)
            container.appendChild(renderer.domElement);

            const group = new THREE.Group();
            group.add(new Element('BV1GV411m74a', 0, 0, 240, 0));
            group.add(new Element('BV1RU4y1n7jb', 240, 0, 0, Math.PI / 2));
            group.add(new Element('BV1oa4y1J7PZ', 0, 0, - 240, Math.PI));
            group.add(new Element('BV1ZP4y1L7ix', - 240, 0, 0, - Math.PI / 2));
            scene.add(group);

            controls = new TrackballControls(camera, renderer.domElement);
            controls.rotateSpeed = 4;

            // window.addEventListener('resize', onWindowResize);


            // const blocker = document.getElementById('blocker');
            // blocker.style.display = 'none';

            // controls.addEventListener('start', function () {

            //     blocker.style.display = '';

            // });
            // controls.addEventListener('end', function () {

            //     blocker.style.display = 'none';

            // });

        }

        function onWindowResize() {

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);

        }

        function animate() {

            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);

        }
    }, [])

    return (
        <div ref={biliRef} >

        </div>
    );
}

export default Bilibili3d;
